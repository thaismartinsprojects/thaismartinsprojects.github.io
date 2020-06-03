const makers = [
  {
    title: 'Antes de TUDO',
    icon: 'shield.png',
    text:
      'Use luvas e máscara para manusear as peças. Não ajude a espalhar mais a infecção. Caso tenha sintomas gripais, evite a fabricação.',
  },
  {
    title: 'Impressão 3D',
    icon: 'printer.png',
    text:
      'PETG, ABS, PA, TRITAN ou PLA. O PETG suporta melhor a desinfeção química no Hospital. Não use EVA pois é dificil a desinfecção no hospital.',
  },
  {
    title: 'Corte da Placa',
    icon: 'scissors.png',
    text:
      'O visor pode ser cortado no laser com PET/PETG, na plotter e na CNC com PVA/PET/PETG/PVC. O PET/PETG suporta melhor a desinfeção química no Hospital',
  },
  {
    title: 'Limpeza e Armazenamento',
    icon: 'bubble.png',
    text:
      'Lave as peças com água, sabão e cloro. Pode-se utilizar Álcool 70%. Guarde em um saco plástico transparente.',
  },
]

const hospitals = [
  {
    title: 'Antes de TUDO',
    icon: 'shield.png',
    text:
      'Desembale o kit e lave tudo com Solução Hipoclorito/Clorexidina. Limpar apenas com alcool 70% ou isopropilico não garante a desinfecção das microfissuras provenientes da impressão 3D.',
  },
  {
    title: 'Montagem',
    icon: 'puzzle.png',
    text:
      "Encaixe a folha de PET ou Acetato transparente por dentro do arco, após isso, encaixe a liga elástica nos pinos acima da orelha. Esse vídeo mostra como montar <a href='https://drive.google.com/file/d/1NIzgziMPRbh7R3bBqBiaVS5QFae1u8Zt/view' target='_blank'>clique aqui</a>.",
  },
  {
    title: 'Reutilização',
    icon: 'plus.png',
    text:
      'O dispositivo deve ser obrigatóriamente higienizado a cada 12h. Após uso diário, limpe o conjunto com Solução Hipoclorito/Cloxedina. Evite utilizar só álcool.',
  },
  {
    title: 'Atenção',
    icon: 'attention.png',
    text:
      'Este equipamento destina-se exclusivamente para uso emergencial, podendo sofrer alterações durante a pandemia de COVID-19. É uma proteção de uso individual.',
  },
]

module.exports = {
  title: 'Faceshield - Impressão 3D',
  slug: 'faceshield',
  category: 'EPI',
  categoryType: 'epis',
  images: [
    'projects/faceshield-3d/faceshield.jpg',
    'projects/faceshield-3d/faceshield-2.jpg',
  ],
  technology: 'Impressão 3D FDM e Laser CO2/Plotter/CNC',
  materials: 'PETG/ABS/PLA para impressão e PET/PETG/PVC/PVA para o visor',
  downloads: [
    'https://drive.google.com/drive/u/1/folders/1LHu5FR8NmOaTzAlJHKPpEDni92rKlkoN',
  ],
  designers:
    'Fernando Simões, Felipe Simões, Lucas "IMO3D" Regadas, Mario Diniz e Renato O. M. de Castro',
  details:
    '<p>Este modelo foi estudado e otimizado por nossa equipe multidisciplinar, com base nisso apresentamos aqui procedimentos de produção e limpeza, para utilização com segurança.</p>',
  procedures: {
    makers,
    hospitals,
  },
}
