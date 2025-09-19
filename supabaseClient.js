import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://.supabase.co'
const supabaseKey = ''

export const supabase = createClient(supabaseUrl, supabaseKey)

export const apiService = {
  async getUsers() {
    const { data, error } = await supabase
      .from('users')
      .select('*')
    if (error) throw error
    return data
  },

  async getListings() {
    const { data, error } = await supabase
      .from('listings')
      .select('*')
    if (error) throw error
    return data
  },

  async getDapBuddyPlans() {
    const { data, error } = await supabase
      .from('dapbuddy_plans')
      .select('*')
    if (error) throw error
    return data
  }
}