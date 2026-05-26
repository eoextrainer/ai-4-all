#!/usr/bin/env python3

from pathlib import Path


TARGET_PATH = Path(__file__).resolve().parent.parent / "program-docs" / "assets" / "app.js"

SPECIFIC_REPLACEMENTS = [
    ("Aofbt", "Août"),
    ("entraeenement", "entraînement"),
    ("entraeenements", "entraînements"),
    ("eatre", "être"),
    ("salf3n", "salón"),
    ("cafetereda", "cafetería"),
    ("barbereda", "barbería"),
    ("consultoreda", "consultoría"),
    ("conserjereda", "conserjería"),
    ("panadereda", "panadería"),
    ("biografeda", "biografía"),
    ("Gueda", "Guía"),
    ("Guedas", "Guías"),
    ("gueda", "guía"),
    ("guedas", "guías"),
    ("clednica", "clínica"),
    ("resfamen", "resumen"),
    ("boletedn", "boletín"),
    ("muse9e", "musée"),
    ("journe9e", "journée"),
    ("confe9rence", "conférence"),
    ("the9rapie", "thérapie"),
    ("hue9spedes", "huéspedes"),
    ("disef1ador", "diseñador"),
    ("compaf1ero", "compañero"),
    ("campaf1a", "campaña"),
    ("resef1as", "reseñas"),
    ("ale9rgenos", "alérgenos"),
    ("cate1logo", "catálogo"),
    ("pre1ctica", "práctica"),
    ("he1bitos", "hábitos"),
    ("bene9fica", "benéfica"),
    ("subvencif3n", "subvención"),
]

def repair_text(value: str) -> str:
    if not value or "\\" in value:
        return value

    output = value.replace("\x00", "").replace("\ufffd", "")

    for source, target in SPECIFIC_REPLACEMENTS:
        output = output.replace(source, target)

    return output


def decode_literal(literal: bytearray) -> str:
    try:
        return literal.decode("utf-8")
    except UnicodeDecodeError:
        return literal.decode("latin-1")


def main() -> None:
    raw = TARGET_PATH.read_bytes()
    output = []
    index = 0
    length = len(raw)

    while index < length:
        byte = raw[index]
        char = chr(byte)

        if char in ('"', "'"):
          quote = char
          output.append(quote)
          index += 1
          literal = bytearray()

          while index < length:
              current = raw[index]
              current_char = chr(current)

              if current_char == "\\":
                  literal.append(current)
                  if index + 1 < length:
                      literal.append(raw[index + 1])
                  index += 2
                  continue

              if current_char == quote:
                  break

              literal.append(current)
              index += 1

          decoded = decode_literal(literal)
          output.append(repair_text(decoded))
          output.append(quote)
          index += 1
          continue

        output.append(bytes([byte]).decode("utf-8", errors="ignore"))
        index += 1

    TARGET_PATH.write_text("".join(output), encoding="utf-8")
    print(f"Repaired UTF-8 content in {TARGET_PATH}")


if __name__ == "__main__":
    main()