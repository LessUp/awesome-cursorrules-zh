# Specifications

This directory contains all project specifications following **Spec-Driven Development (SDD)** principles.

## Directory Structure

```
specs/
├── product/    # Product feature definitions & acceptance criteria (PRDs)
├── rfc/        # Technical design documents & architecture proposals
├── api/        # API interface definitions (OpenAPI, GraphQL schemas, etc.)
├── db/         # Database schema specifications
└── testing/    # BDD test case specifications (Gherkin .feature files)
```

## Purpose

All code implementation must be based on the specifications in this directory as the **Single Source of Truth**.

See `AGENTS.md` at project root for AI agent workflow instructions.
