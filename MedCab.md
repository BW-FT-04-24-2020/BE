---


---

<h1 id="med-cabinet">med-cabinet</h1>
<p>med cabinet matches users with medicinal strains of marijuana. The back end contains a SQLite3 test and development database and a PostgreSQL database for production.</p>
<p>the database has two tables linked with a foreign key. authentication is handled through JASON-web-tokens. The api allows users to make/update and delete both a user profile and saved strain list.</p>
<h2 id="getting-started">Getting Started</h2>
<p>after cloning run <code>npm i bcryptjs cors dotenv express helmet jsonwebtoken knex pg sqlite3 supertest</code> to install the dependencies needed. then run <code>npm i -D jest nodemon</code> to get the dev dependencies. run migrations to create tables.</p>
<h2 id="table-schema">table Schema</h2>
<p>users table:</p>

<table>
<thead>
<tr>
<th>Field</th>
<th>Data Type</th>
<th>Metadata</th>
</tr>
</thead>
<tbody>
<tr>
<td>user_id</td>
<td>integer</td>
<td>increments, primary key</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>not null</td>
</tr>
<tr>
<td>password</td>
<td>string</td>
<td>not null</td>
</tr>
<tr>
<td>email</td>
<td>strain</td>
<td>not null, unique</td>
</tr>
</tbody>
</table><p>Saved Strains table:</p>

<table>
<thead>
<tr>
<th>Field</th>
<th>Data Type</th>
<th>Metadata</th>
</tr>
</thead>
<tbody>
<tr>
<td>saved_strain_id</td>
<td>integer</td>
<td>increments, primary key</td>
</tr>
<tr>
<td>user</td>
<td>integer</td>
<td>unsigned, not null, foreign key, on delete cascade, on update, cascade</td>
</tr>
<tr>
<td>strain</td>
<td>JSON</td>
<td>unsigned, not null</td>
</tr>
</tbody>
</table><h2 id="api">API</h2>
<p>api link: <a href="https://medcab1.herokuapp.com/">https://medcab1.herokuapp.com/</a></p>

<table>
<thead>
<tr>
<th>Method</th>
<th>Endpoint</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>/api/auth/register</td>
<td>allows users to register for app</td>
</tr>
<tr>
<td>POST</td>
<td>/api/auth/login</td>
<td>allows the user to log in generating JW-token</td>
</tr>
<tr>
<td>POST</td>
<td>/api/user/:id/strains</td>
<td>allows user to save strain to favs list</td>
</tr>
<tr>
<td>GET</td>
<td>/api/user/:id</td>
<td>gets user info</td>
</tr>
<tr>
<td>GET</td>
<td>/api/user/:id/strains</td>
<td>allows user access to faved list</td>
</tr>
<tr>
<td>PUT</td>
<td>/api/user/:id</td>
<td>allows user to edit user info</td>
</tr>
<tr>
<td>DELETE</td>
<td>/api/user/:id/strains/:sid</td>
<td>removes faved strain</td>
</tr>
<tr>
<td>DELETE</td>
<td>/api/user/:id</td>
<td>deletes user</td>
</tr>
</tbody>
</table>
