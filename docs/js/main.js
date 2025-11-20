import { supabase } from './config.js'

// Now you can use supabase
const { data, error } = await supabase
    .from('Events')
    .select('*')

console.log(data)