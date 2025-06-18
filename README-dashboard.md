# Portfolio Dashboard with Supabase

A comprehensive dashboard to manage your portfolio content using Supabase as the backend. This dashboard allows you to add, edit, and delete projects, services, tools, and social links dynamically.

## 🚀 Features

- **Projects Management**: Add, edit, and delete portfolio projects with frameworks, images, and descriptions
- **Services Management**: Manage your services with detailed items and descriptions
- **Tools Management**: Add development tools and technologies with icons
- **Social Links Management**: Manage your social media profiles and links
- **Real-time Updates**: Changes are immediately reflected in your portfolio
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## 📋 Prerequisites

Before setting up the dashboard, make sure you have:

1. **Supabase Account**: Sign up at [supabase.com](https://supabase.com)
2. **Node.js**: Version 16 or higher
3. **npm or yarn**: Package manager

## 🛠️ Setup Instructions

### 1. Create Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click "New Project"
3. Fill in your project details
4. Wait for the project to be set up

### 2. Set Up Database Schema

1. In your Supabase project, go to the SQL Editor
2. Copy the contents of `supabase-schema.sql` file
3. Run the SQL script to create all necessary tables and policies

### 3. Get Supabase Credentials

1. Go to Settings → API in your Supabase project
2. Copy your Project URL and anon public key
3. Update the `.env` file with your credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Install Dependencies

The necessary packages are already included in the project:

```bash
npm install
```

### 5. Run the Development Server

```bash
npm run dev
```

## 🎯 Accessing the Dashboard

Once your development server is running:

1. Open your browser and go to `http://localhost:5173/dashboard`
2. You'll see the portfolio dashboard with four main sections:
   - **Projects**: Manage your portfolio projects
   - **Services**: Manage your service offerings
   - **Tools**: Manage your development tools
   - **Social Links**: Manage your social media profiles

## 📊 Database Schema

### Projects Table
- `id`: Auto-generated primary key
- `name`: Project name
- `description`: Project description
- `href`: Project URL/link
- `image`: Project image URL
- `bg_image`: Background image URL
- `frameworks`: JSON array of technologies used

### Services Table
- `id`: Auto-generated primary key
- `title`: Service title
- `description`: Service description
- `items`: JSON array of service items with titles and descriptions

### Tools Table
- `id`: Auto-generated primary key
- `name`: Tool/technology name
- `icon`: Icon image URL

### Socials Table
- `id`: Auto-generated primary key
- `name`: Platform name (e.g., LinkedIn, GitHub)
- `href`: Profile URL

## 🔒 Security

The database is configured with Row Level Security (RLS):

- **Public Read Access**: Anyone can view the data (for your portfolio)
- **Authenticated Write Access**: Only authenticated users can modify data
- All tables have proper policies for secure access

## 🎨 Customization

### Styling
The dashboard uses Tailwind CSS for styling. You can customize:
- Colors in the component files
- Layout in the main Dashboard component
- Form designs in individual manager components

### Adding New Data Types
To add new data types:
1. Create a new table in Supabase
2. Add the table schema to `supabase-schema.sql`
3. Create a new manager component following the existing pattern
4. Add it to the main Dashboard component

## 🔗 Integration with Portfolio

To use the dashboard data in your portfolio components:

1. Use the `useSupabaseData` hook:
```javascript
import { useSupabaseData } from '../hooks/useSupabaseData';
import { projects as fallbackProjects } from '../constants';

const YourComponent = () => {
  const { data: projects, loading } = useSupabaseData('projects', fallbackProjects);
  
  // Your component logic
};
```

2. The hook will:
   - Fetch data from Supabase
   - Fall back to your constants if Supabase is unavailable
   - Handle loading and error states

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check your Supabase URL and API key in `.env`
   - Ensure your Supabase project is active

2. **Permission Denied**
   - Verify RLS policies are correctly set up
   - Check if you need authentication for write operations

3. **CORS Issues**
   - Make sure your domain is added to Supabase allowed origins
   - Check if you're using the correct anon key

### Error Handling

The dashboard includes comprehensive error handling:
- Failed API calls fall back to existing data
- Loading states are shown during operations
- Error messages are logged to console
- User-friendly confirmations for destructive actions

## 🚀 Deployment

When deploying your portfolio with the dashboard:

1. Set up environment variables in your hosting platform
2. Ensure your domain is added to Supabase allowed origins
3. Consider adding authentication for production use
4. Set up proper backup and monitoring for your Supabase project

## 🤝 Contributing

To contribute to the dashboard:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the MIT License.

---

**Happy coding! 🎉**

For any questions or issues, please check the troubleshooting section or create an issue in the repository. 