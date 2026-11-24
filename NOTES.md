# Notes

Entry line (151 chars): "The page said 'show all work,' so I ate it in forty bites and showed every piece on the carpet. I followed the instructions exactly. Where is my treat?"

Rationale: candidate #5 of the 8 in ../candidates.md, and the winner of the internal blind judging (best score across 3 rounds, top-3 in every round). It fits the judge's published brief in its own order: it is unmistakably a caught dog's excuse in the dog's own voice, with no apology and no human embarrassment — this dog thinks it deserves a reward. The laugh is literal-minded dog logic: the instruction printed on the page, "show all work," gets obeyed in the only way a dog can obey it, by eating the page in forty bites and displaying every piece on the carpet. The closing "Where is my treat?" seals the dog's total innocence — it followed the instructions exactly and expects payment — and the whole line stands alone with no setup. It also steers clear of all three stock lines the brief penalises: no cat, no taste of paper, no good boy.

Mechanics: main.ts embeds the line as a constant and writes it (plus a trailing newline) to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output), creating the directory if needed. Deterministic, no network, no randomness. line.txt holds the exact line for byte comparison.
