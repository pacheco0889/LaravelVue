<template>
    <div>
       <!-- Navbar -->
    <Navbar :ruta="ruta"></Navbar>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <Sidebar :ruta="ruta"></Sidebar>

  <!-- Contenido Principa-->
    <div class="content-wrapper">
      <transition name="slide" mode="out-in">
      <router-view></router-view>
      </transition>
    </div>
 
  <!-- /.content-wrapper -->
 <Footer></Footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
    </div>
</template>

<script>
import Navbar from './plantilla/Navbar'
import Sidebar from './plantilla/Sidebar'

import Footer from './plantilla/Footer'

    export default{
      props:['ruta'],
components: {Navbar,Sidebar,Footer}
    }
</script>

<style>

</style>
