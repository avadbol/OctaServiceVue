<template>
    <div>
        <div>
            <b-card no-body>
                <b-tabs vertical  card>
                    <b-tab title="Depolar">
                        <b-card-text>
                           <div class="row">
                               <div class="col-md-6 col-sm-12">
                                   <label >Depo Adı</label>
                                   <b-input placeholder="Lütfen depo adını yazınız"></b-input>
                               </div>
                               <div class="col-md-6 col-sm-12">
                                   <label> Depo Listesi</label>
                               </div>
                           </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab no-body title="Departmanlar">
                        <b-card-img bottom src="https://picsum.photos/600/200/?image=25" alt="Image 25"></b-card-img>
                        <b-card-footer>Picture 2 footer</b-card-footer>
                    </b-tab>
                    <b-tab title="Reyon">
                        <div class="row">
                            <div class="col-md-12">
                                <Rayon-Add></Rayon-Add>
                            </div>
                            <div class="col-md-12">
                                <Rayon-List></Rayon-List>
                            </div>
                        </div>
                    </b-tab>

                    <b-tab no-body title="Grup">
                        <b-card-img bottom src="https://picsum.photos/600/200/?image=26" alt="Image 26"></b-card-img>
                        <b-card-footer>Picture 3 footer</b-card-footer>
                    </b-tab>


                    <b-tab no-body title="Renk">
                        <b-card-img bottom src="https://picsum.photos/600/200/?image=26" alt="Image 26"></b-card-img>
                        <b-card-footer>Picture 3 footer</b-card-footer>
                    </b-tab>

                    <b-tab no-body title="Beden">
                        <b-card-img bottom src="https://picsum.photos/600/200/?image=26" alt="Image 26"></b-card-img>
                        <b-card-footer>Picture 3 footer</b-card-footer>
                    </b-tab>


                    <b-tab no-body title="Birim">
                        <b-card-img bottom src="https://picsum.photos/600/200/?image=26" alt="Image 26"></b-card-img>
                        <b-card-footer>Picture 3 footer</b-card-footer>
                    </b-tab>

                    <b-tab title="Text">
                        <b-card-title>This tab does not have the <code>no-body</code> prop set</b-card-title>
                        <b-card-text>
                            Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
                            consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex
                            consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt
                            veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua
                            esse irure.
                        </b-card-text>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>
<script>
    import RayonAdd from "../../../content/define/rayon/RayonAdd";
    import RayonList from "../../../content/define/rayon/RayonList";

    export default {
        components:{
            RayonList,
            RayonAdd
        },
    }

</script>

