import { getCollection } from 'astro:content';

// Both the cards and JSON-LD use the same editable collection as /team/.
export async function getAgents() {
  const entries = await getCollection('agents');
  return entries.filter(entry => !entry.data.draft)
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
    .map(entry => ({ ...entry.data, id: entry.id, photo: entry.data.image || entry.data.photo }));
}
