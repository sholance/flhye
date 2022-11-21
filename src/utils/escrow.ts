// escrow function to keep money till flight starts using seerBit
// payment is released to tiqwa once flight starts
// if flight does not start payment is held in claim for three days minimum and released
// payment is reversed once flight is cancelled or not rescheduled or unavailable
// supabase database pass flhyedgreat100
// url https://yjmbbandhugcuxfrpdba.supabase.co
// key eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqbWJiYW5kaHVnY3V4ZnJwZGJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3Nzg4MjAsImV4cCI6MTk4NDM1NDgyMH0.5tGyWfhP6Rk-lO4jW5D7LSQOePZFG4b668fIOU2QDXc

import { createClient } from '@supabase/supabase-js'
const { SupabaseConfig } = require("./config");


const supabaseUrl = SupabaseConfig.SUPABSE_URL
const supabaseKey = SupabaseConfig.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)