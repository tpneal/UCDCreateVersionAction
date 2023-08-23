# GitHub Action: Create new UCD component version

This GitHub Action automates the process of triggering the creation of a new UrbanCode Deploy (UCD) component version based on the provided inputs.

## Inputs

1. `component` (required): The name or ID of the component in UrbanCode Deploy.
2. `version` (required): The name of the new component version in UrbanCode Deploy.
3. `description` (optional): Description of the new version.
4. `type` (optional): Type to use for the new version (incremental or full) - full is the default.

## Example Usage

```yaml
name: Create UCD Component Version

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Create Component Version
      uses: tpneal/create-ucd-component-version-javascript-action@v1.1
      with:
        component: 'MyComp'
        name: 'v1'
        description: 'Version 1 of MyComp'
        type: 'full'
        hostname: 'UCD_Server_hostname'
        port: 'UCD_Server_port'
        username: 'admin'
        password: 'admin'
```