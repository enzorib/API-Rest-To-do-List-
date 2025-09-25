import { Router } from "express"

const rota = Router()
let id = 1
let atividade= []

//rota de teste
//http://localhost:4000/health
rota.get('/health', async(_,res)=>{
    try{
        res.json({ok:true, server: 'fulminante na maxima'})
    }
    catch{
        res.status(500).json({ok:false, server:'derrubado fudido ferrado'})
    }
})

//Criar atividade
//http://localhost:4000/atividades
rota.post('/atividades', (req,res)=>{
    const{materia,status,prioridade,descricao} = req.body
    if(!materia, !status,prioridade,!descricao){
        return res.status(400).json({error: "Faltam campos obrigatórios "})
    }
    const NovaAtividade = {
        id: id++,
        materia,
        status,
        prioridade,
        descricao
    }
    atividade.push(NovaAtividade)
    res.status(201).json(NovaAtividade)
})

//listar atividade
//http://localhost:4000/atividades
rota.get('/atividades', (_,res)=>{
    res.json(atividade)
})

//atualizar
////http://localhost:4000/atividades/:id
rota.put('/atividades/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { materia, status, prioridade, descricao } = req.body;

  if (!materia?.trim() || !status?.trim() || !prioridade?.trim() || !descricao?.trim())
    return res.status(400).json({ error: 'Faltam campos obrigatórios' });

  const atividadeEncontrada = atividade.find(a => a.id === id);
  if (!atividadeEncontrada) return res.status(404).json({ error: 'Atividade não encontrada' });

  atividadeEncontrada.materia = materia;
  atividadeEncontrada.status = status;
  atividadeEncontrada.prioridade = prioridade;
  atividadeEncontrada.descricao = descricao;

  res.json(atividadeEncontrada);
});



//delete
//////http://localhost:4000/atividades/:id
rota.delete('/atividades/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = atividade.findIndex(a => a.id === id)
  if (index === -1) return res.status(404).json({ error: 'Atividade não encontrada' })

  atividade.splice(index, 1)
  res.json({ message: 'Atividade excluída com sucesso' })
})



































export default rota
