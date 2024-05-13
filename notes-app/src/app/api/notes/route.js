import supabase from '../dbConfig/supabase';

export async function GET(req, res) {
  // Fetch notes from database
  let { data, error } = await supabase
    .from('binder')
    .select()
  if (data) {
    return Response.json(data);
  } else if (error) {
    return Response.json(error);
  }
}

export async function POST(request) {
  // Rceive data from request param
  const formData = await request.formData();

  // Transform data into fields
  const title = formData.get('title');
  const content = formData.get('content');

  // Upload data to database
  try {
    // Connection to post data
    const { data, error } = await supabase
      .from('binder')
      .insert([
        { title: title, content: content },
      ])
      .select()
    if (error) return Response.json(error);
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: "Error loading data" });
  }
}
