# TFVARS Generator
Github Action to generate a terraform.tfvars file from Github's built-in secrets or variables.

## Inputs

### `file-name`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

None

## Example usage

```yaml
uses: Tensure/tfvars-generator@main
with:
  file-name: 'custom-file.tfvars'
  secret-mappings: |
    MY_GH_SECRET=terraform_secret_variable
  variable-mappings: |
    MY_VAR_SECRET=terraform_variable
    MY_VAR_SECRET2=terraform_variable2
```