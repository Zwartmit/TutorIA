import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ecymjadhcmdmnoeepyzz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjeW1qYWRoY21kbW5vZWVweXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MTUzOTcsImV4cCI6MjA2MzI5MTM5N30.rRo9r0Zr9rjscKqBfKO7lAllfAUPoOGAe-DiAXFS9pE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
