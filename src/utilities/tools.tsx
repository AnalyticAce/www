import React from "react";
import Nodejs from "@/components/icons/Nodejs";
import Postgres from "@/components/icons/Postgres";


export const tools = {
  programming: [
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
          alt="Python"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Python",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" 
          alt="SQL"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "SQL",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
          alt="TypeScript"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "TypeScript",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" 
          alt="Bash"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Bash",
    },
  ],
  data_tools: [
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" 
          alt="Pandas"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Pandas",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" 
          alt="NumPy"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "NumPy",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" 
          alt="Scikit-Learn"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Scikit-Learn",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg" 
          alt="Plotly"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Plotly",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" 
          alt="Matplotlib"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Matplotlib",
    }
  ],
  cloud_devops: [
    // Cloud Platforms
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" 
          alt="GCP"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "GCP",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
          alt="AWS"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "AWS",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" 
          alt="Azure"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Azure",
    },
    // Containerization & Orchestration
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" 
          alt="Docker"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Docker",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" 
          alt="Kubernetes"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Kubernetes",
    },
    // CI/CD
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" 
          alt="Jenkins"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Jenkins",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
          alt="GitHub Actions"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "GitHub Actions",
    },
    // Configuration Management & Workflow
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg" 
          alt="Ansible"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Ansible",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg" 
          alt="Apache Airflow"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Apache Airflow",
    },
    // Version Control & OS
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
          alt="Git"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Git",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" 
          alt="Linux"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Linux",
    },
  ],
  backend_dev: [
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Nodejs {...props} />,
      title: "Node.js",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" 
          alt="Django"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Django",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" 
          alt="FastAPI"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "FastAPI",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Postgres {...props} />,
      title: "PostgreSQL",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" 
          alt="MongoDB"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "MongoDB",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg" 
          alt="SQLAlchemy"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "SQLAlchemy",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" 
          alt="SQLite"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "SQLite",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" 
          alt="Redis"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Redis",
    },
  ],
  development_tools: [
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" 
          alt="VS Code"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "VS Code",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zsh/zsh-original.svg" 
          alt="Zsh"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Zsh",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nano/nano-plain.svg" 
          alt="Nano"
          className={`${props.className} w-full h-full`}
        />
      ),
      title: "Nano",
    },
  ],
};
