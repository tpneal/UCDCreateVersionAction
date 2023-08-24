# GitHub Action: Create new UCD component version

This GitHub Action automates the process of triggering the creation of a new UrbanCode Deploy (UCD) component version based on the provided inputs.

## Inputs

* `component` (required): The name or ID of the component in UrbanCode Deploy.
* `versionname` (required): The name of the new component version in UrbanCode Deploy.
* `description` (optional): Description of the new version.
* `hostname` (required): Hostname or IP of the Launch/UCD server.
* `port` (required): Port number of the Launch/UCD server. Defaults to 8443.
* `username` (required): Username used to authenticate with the Launch/UCD server.
* `password` (required): Password used to authenticate with the Launch/UCD server.

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