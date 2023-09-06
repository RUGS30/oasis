
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kswukthzqsjwrdnubjlr.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtzd3VrdGh6cXNqd3JkbnViamxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMTIzNzEsImV4cCI6MjAwOTU4ODM3MX0.2VRP3sTsSFnW-6HWxJvuU5Ioysah23o1PFbnx6bmb0I"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase