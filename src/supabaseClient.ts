import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gljexqdqiwtejgiyyyhp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsamV4cWRxaXd0ZWpnaXl5eWhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MTAzODYsImV4cCI6MjA2MzI4NjM4Nn0.8JLQN0KvaWLT6_6ettCg3UVEtsr_9Zr0fKNzyA5Otsc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
