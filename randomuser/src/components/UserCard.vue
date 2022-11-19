<template>
    <div class="card border-primary">
        <div class="card-body text-center">

            <img :src="user.picture?.large" height="150" width="150"
                class="rounded-circle img-thumbnail border-radius zoomIn">
            <div class="class-title text-primary">
                <h1>
                    <span class="pl-2">{{ user.name?.title }}</span>
                    <span class="pl-2">{{ user.name?.first }}</span>
                    <span class="pl-2">{{ user.name?.last }}</span>
                </h1>
                <div class="text-left">
                <p>
                    <i class="fa fa-envelope"></i><span>{{user.email}}</span>
                </p>
                <p>
                    <i class="fa fa-phone"></i><span>{{user.phone}}</span>
                </p>
                <p>
                    <i class="fa fa-envelope"></i><span>{{`${user.location?.city} ${user.location?.state} ${user.location?.country}`}}</span>
                </p>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "UserCard",
    props: ['user', 'newUser']
}
</script>

<style>

</style>