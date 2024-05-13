import supabase from "../../dbConfig/supabase";
import extend from 'lodash/extend';

export async function GET(request, {params}) {
  let { data, error } = await supabase
    .from('binder')
    .select()
    .eq('id', params.noteId)
  if (error) return Response.json(error);
  return Response.json(data);
}

export async function PUT(request, {params}) {
  const formData = await request.formData()

  const title = formData.get('title')
  const content = formData.get('content')
  const updated = new Date();
  const updated_at = updated.toISOString();

  let res = {}

  if (title) res.title = title;
  if (content) res.content = content;
  res.updated_at = updated_at;

  let { data, error } = await supabase
    .from('binder')
    .update(res)
    .eq('id', params.noteId)
    .select()
  if (error) return Response.json(error)
  return Response.json(data)
}

export async function DELETE(request, {params}) {
  const { error } = await supabase
    .from('binder')
    .delete()
    .eq('id', params.noteId)
  if (error) return Response.json(error)
  return Response.json({ message: "Note deleted successfully" })
}