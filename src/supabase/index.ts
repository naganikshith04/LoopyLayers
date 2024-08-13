// supabaseClient.ts
import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const SUPABASE_URL = 'https://cuuuwxxlhqvxxoonydio.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1dXV3eHhsaHF2eHhvb255ZGlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMzODc3OTUsImV4cCI6MjAzODk2Mzc5NX0.aRWhxjlH8gTk2OEadJd1bm30k2bMDxRicKeqxyr6mhM'

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY)

export async function checkConnection(): Promise<void> {
  try {
    const { data, error } = await supabase.from('your_table_name').select('*').limit(1)
    
    if (error) {
      console.error('Connection error:', error.message)
    } else {
      console.log('Connection successful, data:', data)
    }
  } catch (err) {
    console.error('Unexpected error during connection check:', err)
  }
}
