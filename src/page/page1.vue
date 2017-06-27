<template>
  <div class="page1">
    <div class="data-table">
        <div class="row">
            <div></div>
            <div></div>
        </div>
        <div class="row"></div>
        <div class="row">
            <table class="table">
            <thead>
                <tr>
                <th class="sorting">id</th>
                <th class="sorting">name</th>
                <th class="sorting">score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Alice</td>
                <td>70</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Zoe</td>
                <td>60</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Bonnie</td>
                <td>50</td>
                </tr>
            </tbody>
            </table>
        </div>
        <div class="row">
            <div class="dataTables_paginate ">
            <ul class="menu-list-ul">
                        <li v-for="n in 5">
                            <a>{{ n }}</a>
                         </li>
                    </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
</script>
