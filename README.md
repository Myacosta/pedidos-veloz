# 🚀 Pedidos Veloz

Sistema de gerenciamento de pedidos construído com arquitetura de microsserviços, containerizado com Docker, orquestrado via Kubernetes e integrado a uma esteira de integração e entrega contínuas (CI/CD).

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Runtime JavaScript dos serviços.
* **Docker & Docker Compose**: Containerização dos microsserviços.
* **Kubernetes (k8s)**: Orquestração e implantação da aplicação.
* **GitHub Actions**: Pipeline de CI/CD para automação de testes e builds.

---

## 🧱 Arquitetura do Projeto

```text
pedidos-veloz/
├── .github/workflows/   # Pipelines de CI/CD (GitHub Actions)
├── k8s/                 # Arquivos de manifesto do Kubernetes
├── services/
│   ├── gateway/         # API Gateway da aplicação
│   └── pedidos/         # Microsserviço responsável pelos pedidos
└── docker-compose.yml   # Subida rápida dos serviços locais