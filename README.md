# GitHub Action: Create new UCD component version

This GitHub Action automates the process of triggering the creation of a new UrbanCode Deploy (UCD) component version based on the provided inputs.

## Inputs

1. `component` (required): The name or ID of the component in UrbanCode Deploy.
2. `version` (required): The name of the new component version in UrbanCode Deploy.
3. `description` (optional): Description of the new version.
4. `type` (optional): Type to use for the new version (incremental or full) - full is the default.
5. `hostname` (required): Hostname or IP of the Launch/UCD server.
6. `port` (required): Port number of the Launch/UCD server. Defaults to 8443.
7. `username` (required): Username used to authenticate with the Launch/UCD server.
8. `password` (required): Password used to authenticate with the Launch/UCD server.

## Example Usage

```yaml
name: Create UCD Component Version

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Create Component Version
      uses: tpneal/create-ucd-component-version-javascript-action@v1.11
      with:
        component: 'MyComp'
        versionname: '${{ github.event.head_commit.id }}'
        description: '${{ github.repositoryUrl }}'
        hostname: 'UCD_Server_hostname'
        port: 'UCD_Server_port'
        username: 'admin'
        password: 'admin'
```