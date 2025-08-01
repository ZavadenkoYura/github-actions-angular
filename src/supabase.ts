import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uccdnvbxfqmlgzllveps.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjY2RudmJ4ZnFtbGd6bGx2ZXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MjQ1MjgsImV4cCI6MjA2OTEwMDUyOH0.E6Evks4kbW_YE_96pnTr2hdhTR52MOEnduMaIJ1LOjs';
const supabase = createClient(supabaseUrl, supabaseKey);
export { supabase };
