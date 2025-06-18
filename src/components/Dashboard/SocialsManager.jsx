import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const SocialsManager = () => {
  const [socials, setSocials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSocial, setEditingSocial] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    href: ''
  });

  useEffect(() => {
    fetchSocials();
  }, []);

  const fetchSocials = async () => {
    try {
      const { data, error } = await supabase
        .from('socials')
        .select('*')
        .order('id', { ascending: true });

      if (error) throw error;
      setSocials(data || []);
    } catch (error) {
      console.error('Error fetching socials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      if (editingSocial) {
        const { error } = await supabase
          .from('socials')
          .update(formData)
          .eq('id', editingSocial.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('socials')
          .insert([formData]);

        if (error) throw error;
      }

      await fetchSocials();
      resetForm();
    } catch (error) {
      console.error('Error saving social:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this social link?')) {
      try {
        const { error } = await supabase
          .from('socials')
          .delete()
          .eq('id', id);

        if (error) throw error;
        await fetchSocials();
      } catch (error) {
        console.error('Error deleting social:', error);
      }
    }
  };

  const startEdit = (social) => {
    setEditingSocial(social);
    setFormData({
      name: social.name,
      href: social.href
    });
    setShowAddForm(true);
  };

  const resetForm = () => {
    setEditingSocial(null);
    setShowAddForm(false);
    setFormData({
      name: '',
      href: ''
    });
  };

  // Get platform icon based on name
  const getPlatformIcon = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('linkedin')) return '💼';
    if (lowerName.includes('github')) return '🐙';
    if (lowerName.includes('twitter') || lowerName.includes('x')) return '🐦';
    if (lowerName.includes('instagram')) return '📸';
    if (lowerName.includes('facebook')) return '📘';
    if (lowerName.includes('youtube')) return '📺';
    if (lowerName.includes('dribbble')) return '🏀';
    if (lowerName.includes('behance')) return '🎨';
    return '🔗';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Social Links</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Social Link
        </button>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              {editingSocial ? 'Edit Social Link' : 'Add New Social Link'}
            </h3>
            <button
              onClick={resetForm}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Platform Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., LinkedIn, GitHub, Instagram"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile URL
              </label>
              <input
                type="url"
                value={formData.href}
                onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://linkedin.com/in/username"
              />
            </div>
          </div>

          {/* Preview */}
          {formData.name && formData.href && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preview
              </label>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl">{getPlatformIcon(formData.name)}</span>
                <div>
                  <div className="font-medium text-gray-900">{formData.name}</div>
                  <div className="text-sm text-gray-500">{formData.href}</div>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={resetForm}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Social Link
            </button>
          </div>
        </div>
      )}

      {/* Socials List */}
      <div className="grid gap-4">
        {socials.map((social) => (
          <div key={social.id} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{getPlatformIcon(social.name)}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{social.name}</h3>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  >
                    {social.href}
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => startEdit(social)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(social.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {socials.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <LinkIcon className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No social links yet</h3>
          <p className="text-gray-500 mb-4">Get started by adding your first social media profile.</p>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Your First Social Link
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialsManager; 