import {JSONFilePreset} from 'lowdb/node'

type Word = {
    text: string,
    userId: string
}

type Data = {
    words: Word[]
}

const defaultData: Data = {
    words: []
}

export async function addWord(userId: string, word: string) {
    const db = await JSONFilePreset<Data>('db.json', defaultData)

    db.data.words.push({
        userId: userId, 
        text: word
    })
    await db.write()
}
