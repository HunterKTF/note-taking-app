// Supabase connection
import { createClient } from '@supabase/supabase-js';


// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Export supabase connection
export default supabase;