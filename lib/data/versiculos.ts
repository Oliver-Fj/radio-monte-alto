/**
 * Versículos del día (Reina Valera 1960). Se muestra uno por día del mes.
 * `destacado`: frases que la cita resalta en blanco.
 */
export interface Versiculo {
  texto: string;
  referencia: string;
  destacado: string[];
}

export const VERSICULOS: Versiculo[] = [
  { texto: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.', referencia: 'Juan 3:16', destacado: ['amó Dios al mundo', 'vida eterna'] },
  { texto: 'Todo lo puedo en Cristo que me fortalece.', referencia: 'Filipenses 4:13', destacado: ['en Cristo'] },
  { texto: 'Jehová es mi pastor; nada me faltará.', referencia: 'Salmos 23:1', destacado: ['mi pastor'] },
  { texto: 'Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.', referencia: 'Proverbios 3:5-6', destacado: ['de todo tu corazón', 'enderezará tus veredas'] },
  { texto: 'Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.', referencia: 'Mateo 6:33', destacado: ['el reino de Dios'] },
  { texto: 'No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento.', referencia: 'Romanos 12:2', destacado: ['transformaos'] },
  { texto: 'El Señor es mi luz y mi salvación; ¿a quién temeré? El Señor es la fortaleza de mi vida; ¿de quién me atemorizaré?', referencia: 'Salmos 27:1', destacado: ['mi luz y mi salvación'] },
  { texto: 'Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.', referencia: 'Romanos 8:28', destacado: ['todas las cosas les ayudan a bien'] },
  { texto: 'Estad siempre gozosos. Orad sin cesar. Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.', referencia: '1 Tesalonicenses 5:16-18', destacado: ['Orad sin cesar'] },
  { texto: 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.', referencia: 'Jeremías 29:11', destacado: ['pensamientos de paz'] },
  { texto: 'No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.', referencia: 'Isaías 41:10', destacado: ['yo estoy contigo', 'siempre te ayudaré'] },
  { texto: 'Lámpara es a mis pies tu palabra, y lumbrera a mi camino.', referencia: 'Salmos 119:105', destacado: ['tu palabra'] },
  { texto: 'Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.', referencia: 'Mateo 11:28', destacado: ['yo os haré descansar'] },
  { texto: 'El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece.', referencia: '1 Corintios 13:4', destacado: ['el amor'] },
  { texto: 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.', referencia: 'Efesios 2:8', destacado: ['por gracia sois salvos', 'don de Dios'] },
  { texto: 'Jehová peleará por vosotros, y vosotros estaréis tranquilos.', referencia: 'Éxodo 14:14', destacado: ['Jehová peleará por vosotros'] },
  { texto: 'Buscad a Jehová mientras puede ser hallado, llamadle en tanto que está cercano.', referencia: 'Isaías 55:6', destacado: ['Buscad a Jehová'] },
  { texto: 'El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.', referencia: 'Salmos 91:1', destacado: ['al abrigo del Altísimo'] },
  { texto: 'Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza.', referencia: 'Gálatas 5:22-23', destacado: ['el fruto del Espíritu'] },
  { texto: 'Todo lo que pidiereis al Padre en mi nombre, lo haré, para que el Padre sea glorificado en el Hijo.', referencia: 'Juan 14:13', destacado: ['en mi nombre'] },
  { texto: 'Y él dijo: Mi presencia irá contigo, y te daré descanso.', referencia: 'Éxodo 33:14', destacado: ['Mi presencia irá contigo'] },
  { texto: 'Encomienda a Jehová tu camino, y confía en él; y él hará.', referencia: 'Salmos 37:5', destacado: ['confía en él'] },
  { texto: 'No se turbe vuestro corazón; creéis en Dios, creed también en mí.', referencia: 'Juan 14:1', destacado: ['No se turbe vuestro corazón'] },
  { texto: 'El nombre de Jehová es torre fuerte; a él correrá el justo, y será levantado.', referencia: 'Proverbios 18:10', destacado: ['torre fuerte'] },
  { texto: 'Por tanto, os digo que todo lo que pidiereis orando, creed que lo recibiréis, y os vendrá.', referencia: 'Marcos 11:24', destacado: ['creed que lo recibiréis'] },
  { texto: 'Porque el Señor no abandona a su pueblo, ni desampara su heredad.', referencia: 'Salmos 94:14', destacado: ['no abandona a su pueblo'] },
  { texto: 'El que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo.', referencia: 'Filipenses 1:6', destacado: ['la buena obra'] },
  { texto: 'Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias.', referencia: 'Filipenses 4:6', destacado: ['Por nada estéis afanosos'] },
  { texto: 'Mas a Dios gracias, el cual nos lleva siempre en triunfo en Cristo Jesús.', referencia: '2 Corintios 2:14', destacado: ['en triunfo'] },
  { texto: '¿No te he mandado que te esfuerces y seas valiente? No temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.', referencia: 'Josué 1:9', destacado: ['esfuerces y seas valiente'] },
  { texto: 'Jehová te bendiga, y te guarde; Jehová haga resplandecer su rostro sobre ti, y tenga de ti misericordia.', referencia: 'Números 6:24-25', destacado: ['Jehová te bendiga'] },
];

/** Parte el texto en trozos normales y destacados, en orden. */
export function partirVersiculo({ texto, destacado }: Versiculo): { texto: string; destacado: boolean }[] {
  if (destacado.length === 0) return [{ texto, destacado: false }];
  const escapar = (f: string) => f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const patron = new RegExp(`(${destacado.map(escapar).join('|')})`);
  return texto
    .split(patron)
    .filter(Boolean)
    .map((trozo) => ({ texto: trozo, destacado: destacado.includes(trozo) }));
}
