<template>
    <section>
        <h2>My friends</h2>
        <ul>
            <li></li>
        </ul>
    </section>
</template>

<script>
export default {
    data(){
        return{
            friends: [
                {
                    id: 'igor',
                    name: 'Igor Renoir',
                    phone: '0120310',
                    email: 'igor@bff.com.br'
                },
                {
                    id: 'betty',
                    name: 'Betty Liz',
                    phone: '0120310',
                    email: 'betty@bff.com.br'
                },
                {
                    id: 'daniel',
                    name: 'Daniel Souza Lins',
                    phone: '01203121210',
                    email: 'daniel@bff.com.br'
                }


            ]
        }
    }
}

</script>