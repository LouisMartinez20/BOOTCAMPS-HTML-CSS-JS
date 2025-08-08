const SCRIPTS = [
  { name: "Latin", ranges: [[65, 91], [97, 123]], direction: "ltr" },
  { name: "Arabic", ranges: [[1536, 1792]], direction: "rtl" },
  { name: "Mongolian", ranges: [[6144, 6319]], direction: "ttb" }
];

const characterScript = code => //convierte un código de carácter a su unicode
  SCRIPTS.find(({ ranges }) =>
    ranges.some(([from, to]) => code >= from && code < to)
  );

const countBy = (items, groupFn) => //cuenta elementos en un array agrupados por una función
  items.reduce((counts, item) => {
    const name = groupFn(item);
    if (!name) return counts;

    const found = counts.find(c => c.name === name);
    found ? found.count++ : counts.push({ name, count: 1 });
    return counts;
  }, []);

const dominantDirection = text => { //determina la dirección de escritura dominante en un texto
  const directions = countBy([...text], char => {
    const script = characterScript(char.codePointAt(0));
    return script?.direction; 
  });

  if (!directions.length) return "ltr";

  return directions.reduce((max, dir) =>
    dir.count > max.count ? dir : max
  ).name;
};

console.log(dominantDirection("Hello!"));            // "ltr"
console.log(dominantDirection("Hey, مساء الخير"));  // "rtl"
console.log(dominantDirection("ᠮᠣᠩᠭᠤᠯ"));        // "ttb"
