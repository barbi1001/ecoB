const fs = require('fs');
const pg = require('pg');
const url = require('url');

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl:  {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUWbp3z9A2sa31+YeOZhplT+hmS0MwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvNTI3ZjgyOWYtNWVkZS00ZTMxLTgwOGEtZGEwZDM3OTk5
MWQxIFByb2plY3QgQ0EwHhcNMjQxMTI1MTQzMjI0WhcNMzQxMTIzMTQzMjI0WjA6
MTgwNgYDVQQDDC81MjdmODI5Zi01ZWRlLTRlMzEtODA4YS1kYTBkMzc5OTkxZDEg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAN9Fnck1
ph69OSE3NyifbYPbVrSA7ifBH7fA5uw8Nn2VSXHFftLF7T3B8xoLx8jxyY+PYYJC
Na4IjYSEfXEbzoVxxiKspJdjKlMg5ZO3XsjCtTw7/esXJcPekZX98JOF9psmuKW0
8I48Tah43ToCmpUhVZ6nXBM8Mc9Pl3ErVpwN6r0tdhG4JQrwftuZoXPSqfm0BUqs
v/WJ5BeAXUiInuDpv+J0lpqYisiTbaniNv6/G2OEWBUU/Fz/dqfm5NKrdjt1NWlh
Hc+0Y8QMnA2NS1cgoUmQE959MDwEhavZaCs9FSMmpDEQm+/eJSW6dM8Ob9FDSlaf
SYNmRVbMxH+WUuOzCGq36nP5Dh+48t0TYET+FL5vjegWhOg6vM0+38l1q+67oP/Z
suTdQZmY1Zr/TxOGZuoIjBRf8beeFUDiP2qtH586h02v95BJTwuTMXUusLQ4qQCQ
9yurbnc2SGv2b7mi2JmZnfJ0eE8cl7zM1aVYDAW5+b7GWdbgtn0dBOB/tQIDAQAB
oz8wPTAdBgNVHQ4EFgQUJ4ZwSVuu6Pdg+p/NurZklIKZo34wDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAKpIjk9hE+3ToIFq
R9KXufX/44DAjcfqZJf47momBUoDCOafRgRH9SsKJg08LCgOFuNuUPD62lxQKRYN
WkEBIkNBm3U2FBzDbA/oerQvQH+PC3lKiKhRRXbi6++YSf+jGSEC4oLF6HiDErJr
A5UBtPtjgZrhDxS+TFNC/SzOsEtsAo6tdFRjUMWYX2XekjKdc7QejR+BVA2VIyPq
eXrSrGe7jP1yvbJJmqEH8VK4vnyqmexwDH9dGtOAbq8UFYMymTQyaqpv1vYQMnmg
/WHLxKPZspdTwC9xT/d/ombZOTHAF651003/R8X6AY8lhDV9DjeP8YoEDOCTbpGn
h02GWrDxxb3+mWnAlXUFDw6cjFcrVhagFieJ8/Cdh+RVp6AFwUJ4Y9vK/VDp+wp+
mFJC1vZnbuDNp6PeQTycMzwZIy0qVGSsjtBkRx8vFw4owjWqjf/iiSEwlT0QxAb5
+ak8dD+9b/8P6QBZdHrV0+4oPI1wqKnKqOEVzZb7fcjWQvjYzQ==
-----END CERTIFICATE-----`,
    },
    },
  },
});
