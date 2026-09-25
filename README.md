# ADAMIXTURE Showcase

Selected real-world research studies and software integrations powered by [ADAMIXTURE](https://github.com/AI-sandbox/ADAMIXTURE).

🌐 **Live Website:** [https://ai-sandbox.github.io/adamixture-showcase/](https://ai-sandbox.github.io/adamixture-showcase/)

---

## Use Cases

### 1. Connectivity and dispersal mode shape the landscape genetics of a carnivorous pitcher plant-arthropod metacommunity

* **Authors:** Nonno Hasegawa, Asa E. Conover, Matin Miryeganeh, David W. Armitage (2026)
* **Preprint:** [bioRxiv (DOI: 10.64898/2026.08.09.743144)](https://doi.org/10.64898/2026.08.09.743144)
* **Organism:** *Darlingtonia californica* (Carnivorous cobra lily) & associated obligate arthropods (*Metriocnemus edwardsi*, *Sarraceniopus darlingtoniae*)
* **Genomic Dataset:** 19,166 nuclear SNPs across 199 individuals sampled across Oregon and northern California.
* **ADAMIXTURE Application:** Evaluated across $K = 2 \dots 15$ with 5-fold cross-validation, confirming $K = 3–4$ as the optimal regional ancestry clusters.
* **Key Finding:** Uncovered sharp regional genetic differentiation and limited gene flow across geographic margins, confirming isolation by landscape resistance and the central-marginal hypothesis in non-model organisms.

<p align="center">
  <img src="assets/img/darlingtonia_admixture.png" alt="ADAMIXTURE ancestry proportions in Darlingtonia californica" width="800">
</p>

---

### 2. JanusX: An Integrated Platform for Scalable GWAS and Genomic Selection

* **Platform:** JanusX (Joint Association and Novel Utility for Selection)
* **Module:** `fastpop` (Population Structure & Stratification Engine)
* **ADAMIXTURE Application:** Integrates ADAMIXTURE directly into its core `fastpop` module to provide ultrafast unsupervised ancestry decomposition, generating stacked ancestry proportion bar plots (Q matrices) and adjusting for population stratification across large-scale cohorts in GWAS and genomic prediction pipelines.

---

## Submit a Use Case

If you used ADAMIXTURE in your research paper, preprint, thesis, or software tool:
* Submit via [GitHub Issues](https://github.com/AI-sandbox/adamixture-showcase/issues/new?template=submit_use_case.yml)
* Or open a Pull Request at [AI-sandbox/adamixture-showcase](https://github.com/AI-sandbox/adamixture-showcase).

---

## Citation

If you use ADAMIXTURE, please cite:

```bibtex
@article{saurinaricos2026adamixture,
  title     = {ADAMIXTURE: adaptive first-order optimization for biobank-scale genetic clustering},
  author    = {Saurina-i-Ric{\'o}s, Joan and Mas Montserrat, Daniel and Ioannidis, Alexander G.},
  journal   = {Bioinformatics},
  volume    = {42},
  number    = {Supplement\_1},
  pages     = {btag236},
  year      = {2026},
  publisher = {Oxford University Press},
  doi       = {10.1093/bioinformatics/btag236}
}
```