import { getAll } from '../db/database';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function login(req, res) {
    if (req.method === 'POST') {
        If(!req.body) {
            res.status(404)
            res.end('Error')
            return 
        }
        const { username, password } = req.body;
        const log = await loginUser(username, password);
        const res = await getToken();
        console.log(retun);
        res.json(retun);
        }
    }
}
