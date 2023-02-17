const express=require('express')
const app=express()
const PORT=3001

const junk = [
  {
    title: "screw",
    amount: 3,
    loc: "Next to me",
    tags: "metal",
    description: "screwy!",
  },
  {
    title: "glue",
    amount: 1,
    loc: "in tummy",
    tags: "yummy",
    description: "tasty!",
  },
  {
    title: "wire",
    amount: 2,
    loc: " to me",
    tags: "yum",
    description: "windy!",
  },
  {
    title: "screw",
    amount: 3,
    loc: "Next to me",
    tags: "metal",
    description: "screwy!",
  },
  {
    title: "glue",
    amount: 1,
    loc: "in tummy",
    tags: "yummy",
    description: "tasty!",
  },
  {
    title: "wire",
    amount: 2,
    loc: " to me",
    tags: "yum",
    description: "windy!",
  },
  {
    title: "screw",
    amount: 3,
    loc: "Next to me",
    tags: "metal",
    description: "screwy!",
  },
  {
    title: "glue",
    amount: 1,
    loc: "in tummy",
    tags: "yummy",
    description: "tasty!",
  },
  {
    title: "wire",
    amount: 2,
    loc: " to me",
    tags: "yum",
    description: "windy!",
  },
  {
    title: "screw",
    amount: 3,
    loc: "Next to me",
    tags: "metal",
    description: "screwy!",
  },
  {
    title: "glue",
    amount: 1,
    loc: "in tummy",
    tags: "yummy",
    description: "tasty!",
  },
  {
    title: "wire",
    amount: 2,
    loc: " to me",
    tags: "yum",
    description: "windy!",
  },
  {
    title: "screw",
    amount: 3,
    loc: "Next to me",
    tags: "metal",
    description: "screwy!",
  },
  {
    title: "glue",
    amount: 1,
    loc: "in tummy",
    tags: "yummy",
    description: "tasty!",
  },
  {
    title: "wire",
    amount: 2,
    loc: " to me",
    tags: "yum",
    description: "windy!",
  },
  {
    title: "screw",
    amount: 3,
    loc: "Next to me",
    tags: "metal",
    description: "screwy!",
  },
  {
    title: "glue",
    amount: 1,
    loc: "in tummy",
    tags: "yummy",
    description: "tasty!",
  },
  {
    title: "wire",
    amount: 2,
    loc: " to me",
    tags: "yum",
    description: "windy!",
  },
  {
    title: "screw",
    amount: 3,
    loc: "Next to me",
    tags: "metal",
    description: "screwy!",
  },
  {
    title: "glue",
    amount: 1,
    loc: "in tummy",
    tags: "yummy",
    description: "tasty!",
  },
  {
    title: "wire",
    amount: 2,
    loc: " to me",
    tags: "yum",
    description: "windy!",
  },
  {
    title: "screw",
    amount: 3,
    loc: "Next to me",
    tags: "metal",
    description: "screwy!",
  },
  {
    title: "glue",
    amount: 1,
    loc: "in tummy",
    tags: "yummy",
    description: "tasty!",
  },
  {
    title: "wire",
    amount: 2,
    loc: " to me",
    tags: "yum",
    description: "windy!",
  },
  {
    title: "screw",
    amount: 3,
    loc: "Next to me",
    tags: "metal",
    description: "screwy!",
  },
  {
    title: "glue",
    amount: 1,
    loc: "in tummy",
    tags: "yummy",
    description: "tasty!",
  },
  {
    title: "wire",
    amount: 2,
    loc: " to me",
    tags: "yum",
    description: "windy!",
  },
];

app.get('/junk',(req,res)=>{
  res.json(junk)
})

app.listen(PORT,()=>{
  console.log('Server is listening....')
})
