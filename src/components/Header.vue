<template>
    <div>
        <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            >
            <b-carousel-slide
                caption="Fight against covid19"
                img-height="480"
                img-src="https://cdn.pixabay.com/photo/2020/03/11/15/06/covid-19-4922384_960_720.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
                caption="Wear your mask anywhere"
                img-height="480"
                img-src="https://cdn.pixabay.com/photo/2020/03/28/10/25/virus-4976408_960_720.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
                caption="Work at home to be safe"
                img-height="480"
                img-src="https://cdn.pixabay.com/photo/2020/03/11/15/06/covid-19-4922384_960_720.jpg"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>