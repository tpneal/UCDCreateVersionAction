# GitHub Action: Create new UCD component version

This GitHub Action automates the process of triggering the creation of a new UrbanCode Deploy (UCD) component version based on the provided inputs.

## Inputs

* `component` (required): The name or ID of the component in UrbanCode Deploy.
* `versionname` (required): The name of the new component version in UrbanCode Deploy.
* `description` (optional): Description of the new version.
* `link` (optional): URL to add to the component version.
* `hostname` (required): Hostname or IP of the Launch/UCD server.
* `port` (required): Port number of the Launch/UCD server. Defaults to 8443.
* `username` (username:password or authToken is required): Username used to authenticate with the Launch/UCD server.
* `password` (username:password or authToken is required): Password used to authenticate with the Launch/UCD server.
* `authToken` (username:password or authToken is required): Authentication token used to authenticate with the Launch/UCD server.  This will override the username:password if specified.
* `disableSSLVerification` (optional): A boolean value indicating whether to skip SSL certificate validation when making HTTPS requests. Default is `false`.

## Example Usage

```yaml
name: Create Launch/UCD Component Version

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Create Component Version
      uses: tpneal/create-ucd-component-version-javascript-action@v1.32
      with:
        component: 'MyComp'
        versionname: '${{ github.event.head_commit.id }}'
        description: '${{ github.repositoryUrl }}'
        link: '${{ github.server_url }}/${{ github.repository }}/commit/${{ github.event.head_commit.id }}'
        hostname: 'UCD_Server_hostname'
        port: '8443'
        authToken: '${{ secrets.UCD_AUTHTOKEN }}'
```