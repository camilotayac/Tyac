import { getCollection } from 'astro:content';

async function debug() {
    const cursosEntries = await getCollection('cursos');
    console.log("Total entries:", cursosEntries.length);
    cursosEntries.forEach(entry => {
        console.log(`ID: ${entry.id}, curso: ${entry.data.curso}, id_clase: ${entry.data.id_clase}`);
    });
}

debug();
