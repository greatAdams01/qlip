import { Router } from "https://deno.land/x/oak/mod.ts";


import db from "../database/index.ts";

const router = new Router()


router.post('/mint', async (ctx) => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '2d2727a6f3mshafaced3297bb836p1bb7f2jsnb2b4cf8c849d',
      'X-RapidAPI-Host': 'dropchain1.p.rapidapi.com'
    },
    body: '{"app_id":"g12mkySbuqSos2BiEF09wfCb", "user1_uid":"5h4wYHh2y0N2tmAF1UrgsQUqQN73"}'
  };
  
  const result = await fetch('https://dropchain1.p.rapidapi.com/dropchain/v1/get_algo_address_from_uid', options)
  const viewModel = db.view
  const views = await viewModel.find()
  console.log(views)
  const data = await result.json()
  console.log(data)


  ctx.response.body = "Hello Ok!";
})


export default router