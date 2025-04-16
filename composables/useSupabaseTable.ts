type QueryOptions = {
    filter?: { [key: string]: any }
    single?: boolean
    orderBy?: string
    ascending?: boolean
  }
  
  export const useSupabaseTable = (table: string) => {
    const { $supabase } = useNuxtApp()
  
    const selectAll = async (options: QueryOptions = {}) => {
        let query = $supabase.from(table).select('*')
      
        if (options.filter) {
          for (const key in options.filter) {
            const value = options.filter[key]
            if (value === null) {
              query = query.is(key, null)
            } else {
              query = query.eq(key, value)
            }
          }
        }
      
        if (options.orderBy) {
          query = query.order(options.orderBy, { ascending: options.ascending ?? true })
        }
      
        if (options.single) {
          query = query.single()
        }
      
        const { data, error } = await query
        if (error) throw error
        return data
      }
      
  
    const selectById = async (id: string) => {
      const { data, error } = await $supabase.from(table).select('*').eq('id', id).single()
      if (error) throw error
      return data
    }
  
    const insert = async (payload: any) => {
      const { data, error } = await $supabase.from(table).insert(payload).select()
      if (error) throw error
      return data
    }
  
    const updateById = async (id: string, payload: any) => {
      const { data, error } = await $supabase.from(table).update(payload).eq('id', id).select()
      if (error) throw error
      return data
    }
  
    const deleteById = async (id: string) => {
      const { error } = await $supabase.from(table).delete().eq('id', id)
      if (error) throw error
      return true
    }
  
    return {
      selectAll,
      selectById,
      insert,
      updateById,
      deleteById
    }
  }
  