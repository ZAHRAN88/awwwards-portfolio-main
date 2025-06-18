import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// Transform database column names to match frontend expectations
const transformProjectData = (projects) => {
  return projects.map(project => ({
    ...project,
    bgImage: project.bg_image, // Transform bg_image to bgImage for frontend compatibility
  }));
};

export const useSupabaseData = (table, fallbackData = []) => {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: result, error } = await supabase
          .from(table)
          .select('*')
          .order('id', { ascending: true });

        if (error) {
          console.error(`Error fetching ${table}:`, error);
          // Use fallback data if there's an error
          setData(fallbackData);
          setError(error);
        } else {
          // Transform data based on table type
          let transformedData = result || fallbackData;
          if (table === 'projects' && transformedData.length > 0) {
            transformedData = transformProjectData(transformedData);
          }
          setData(transformedData);
        }
      } catch (err) {
        console.error(`Error fetching ${table}:`, err);
        setData(fallbackData);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [table]);

  return { data, loading, error, refetch: () => fetchData() };
}; 