import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://esnfwxitclmbzdxuevwg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzbmZ3eGl0Y2xtYnpkeHVldndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczNzcyMDIsImV4cCI6MjA3Mjk1MzIwMn0.7B55c2XZQeQKwsLeKcg-1THeH4GogccAVX2nQnflfEQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
