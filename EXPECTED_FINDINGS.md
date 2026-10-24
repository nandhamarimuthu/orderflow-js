# Expected Findings — JavaScript

> Intentional test fixture. Do not deploy.

## Dependency risks
`package.json` pins older Express, lodash, jsonwebtoken, axios, qs, minimist, node-fetch, multer, handlebars,
serialize-javascript, aws-sdk, mongoose, and test tool versions. Validate exact versions with OSV/npm audit;
do not assume every pinned package has an applicable advisory in every dependency tree.

## Application security
- `src/routes/admin.js`: dynamic `Function` execution of request input.
- `src/utils/serialization.js`: dynamic code execution in event decoder.
- `src/auth/jwtAuth.js`: JWT decoding without signature verification.
- `src/auth/passwords.js`: MD5 and `Math.random()` for temporary codes.
- `src/integrations/shippingClient.js`: caller-controlled URL, unlimited timeout, redirects (SSRF pattern).
- `src/integrations/paymentGateway.js`: no timeout; example-only endpoint and token in config.
- `src/services/reportService.js`: untrusted title compiled into a template.
- `src/utils/files.js`: unsafe path composition and mode 0777.
- `src/integrations/s3Storage.js`: public-read ACL.
- `src/routes/orders.js`: error stack leakage.
- `src/app.js`: wildcard CORS and trust proxy enabled.
- `.github/workflows/ci.yml`: pull_request_target, broad permissions, unpinned actions, secret echo.
- `Dockerfile`: latest base image, root, remote ADD, secret ENV.

## Terraform security/cost
- `terraform/network.tf`: broad world-open ingress, three NAT gateways.
- `terraform/compute.tf`: six oversized public instances with gp2 500GB unencrypted disks.
- `terraform/database.tf`: two large public, unencrypted RDS instances and costly provisioned IOPS.
- `terraform/storage.tf`: public S3 ACL, no lifecycle/encryption/versioning controls, unattached EBS and snapshots.
- `terraform/lambda.tf`: max memory/timeouts, old runtime, x86_64, fake plaintext token.
- `terraform/sqs.tf`: unencrypted queues, no DLQ, wildcard queue policy.
- `terraform/loadbalancer.tf`: idle ALB.
- `terraform/iam.tf`: wildcard action/resource policy.
- Cost remediation directions: rightsize, gp2→gp3, Graviton where compatible, consolidate NAT, remove idle ALB and orphan storage, add lifecycle, reduce RDS IOPS.

## Quality and tests
- Duplicated aggregation logic across `src/services/*`.
- Thin Jest coverage by design: money/validators and a few API happy paths only.
