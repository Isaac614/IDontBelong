import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

export const supabase = createClient(
    'https://tdmpqnmssswhinkziphm.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbXBxbm1zc3N3aGlua3ppcGhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1ODQ2MjAsImV4cCI6MjA3OTE2MDYyMH0.vVw3TA5STlU8N9mLjaZ5JuST0WvdSLBsechfUoJPfm0'
);