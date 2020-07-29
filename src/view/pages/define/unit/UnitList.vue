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

                    <b-tab title="Grup">
                        <div class="row">
                            <div class="col-md-12">
                                <Group-Add></Group-Add>
                            </div>
                            <div class="col-md-12">
                                <Group-List></Group-List>
                            </div>
                        </div>
                    </b-tab>


                    <b-tab title="Renk">
                        <div class="row">
                            <div class="col-md-12">
                                <Color-Add></Color-Add>
                            </div>
                            <div class="col-md-12">
                                <Color-List></Color-List>
                            </div>
                        </div>
                    </b-tab>

                    <b-tab  title="Beden">
                        <div class="row">
                            <div class="col-md-12">
                                <Body-Add></Body-Add>
                            </div>
                            <div class="col-md-12">
                                <Body-List></Body-List>
                            </div>
                        </div>
                    </b-tab>


                    <b-tab title="Birim">
                        <div class="row">
                            <div class="col-md-12">
                                <Unit-Add></Unit-Add>
                            </div>
                            <div class="col-md-12">
                                <Unit-List></Unit-List>
                            </div>
                        </div>
                    </b-tab>


                </b-tabs>
            </b-card>
        </div>
    </div>
</template>
<script>
    import RayonAdd from "../../../content/define/unit/rayon/RayonAdd";
    import RayonList from "../../../content/define/unit/rayon/RayonList";
    import GroupAdd from "../../../content/define/unit/group/GroupAdd"
    import GroupList from "../../../content/define/unit/group/GroupList"
    import ColorAdd from "../../../content/define/unit/color/ColorAdd";
    import ColorList from "../../../content/define/unit/color/ColorList";
    import BodyAdd from "../../../content/define/unit/body/BodyAdd"
    import BodyList from "../../../content/define/unit/body/BodyList"
    import UnitAdd from "../../../content/define/unit/unit/UnitAdd"
    import UnitList from "../../../content/define/unit/unit/UnitList"




    export default {
        components:{
            RayonList,
            RayonAdd,
            GroupAdd,
            GroupList,
            ColorAdd,
            ColorList,
            BodyAdd,
            BodyList,
            UnitAdd,
            UnitList
        },
    }

</script>

