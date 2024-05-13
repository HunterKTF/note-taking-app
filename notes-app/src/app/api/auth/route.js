import supabase from '../dbConfig/supabase';

export async function POST(request) {
  const formData = await request.formData()

  const email = formData.get('email')
  const password = formData.get('password')

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })
  if (error) return Response.json(error)
  return Response.json(data)
}