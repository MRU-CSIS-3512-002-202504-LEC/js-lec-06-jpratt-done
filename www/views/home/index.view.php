<?php require path_to('views/partials/head.partial.php') ?>

<h1>Demos</h1>
<table>
    <thead>
        <tr>
            <th style="width: 180px;">Demo</th>
            <th>Topic</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="/demo-01">DEMO-01</a></td>
            <td>Event review. The currentTarget event property.</td>
        </tr>
        <tr>
            <td><a href="/demo-02">DEMO-02</a></td>
            <td>Event propagation example 2.</td>
        </tr>
        <tr>
            <td><a href="/demo-03">DEMO-03</a></td>
            <td>Simple event delegation example.</td>
        </tr>
        <tr>
            <td><a href="/demo-04a">DEMO-04a</a></td>
            <td>An example WITHOUT delegation.</td>
        </tr>
        <tr>
            <td><a href="/demo-04b">DEMO-04b</a></td>
            <td>Same example WITH delegation.</td>
        </tr>
    </tbody>
</table>

<?php require path_to('views/partials/foot.partial.php') ?>