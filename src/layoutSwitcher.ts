const layoutMap: Record<string, string> = {
  // Русская -> Английская раскладка
  "й": "q", "ц": "w", "у": "e", "к": "r", "е": "t",
  "н": "y", "г": "u", "ш": "i", "щ": "o", "з": "p",
  "х": "[", "ъ": "]", "ф": "a", "ы": "s", "в": "d",
  "а": "f", "п": "g", "р": "h", "о": "j", "л": "k",
  "д": "l", "ж": ";", "э": "'", "я": "z", "ч": "x",
  "с": "c", "м": "v", "и": "b", "т": "n", "ь": "m",
  "б": ",", "ю": ".", "ё": "`", "Ё": "~", "Х": "{",
  "Ъ": "}", "Ж": ":", "Э": "\"", "Б": "<", "Ю": ">",
  "Й": "Q", "Ц": "W", "У": "E", "К": "R", "Е": "T",
  "Н": "Y", "Г": "U", "Ш": "I", "Щ": "O", "З": "P",
  "Ф": "A", "Ы": "S", "В": "D", "А": "F", "П": "G",
  "Р": "H", "О": "J", "Л": "K", "Д": "L", "Я": "Z",
  "Ч": "X", "С": "C", "М": "V", "И": "B", "Т": "N",
  "Ь": "M", ",": "<", ".": ">", " ": " "
};

export function switchLayout(text: string): string {
  return text
    .split("")
    .map(char => layoutMap[char] || char)
    .join("");
}

