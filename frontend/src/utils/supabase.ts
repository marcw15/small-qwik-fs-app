import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://inhisphvnvpkshxdhhzu.supabase.co"
const supabaseAnonPublic = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluaGlzcGh2bnZwa3NoeGRoaHp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3NjE3MDMsImV4cCI6MjAxODMzNzcwM30.wiqxW1364GnR69e3-YaTQuAdbgaL2Q7z2pzgE_z4CUA"

export const supabase = createClient(supabaseUrl, supabaseAnonPublic);