function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validasi() {
    var nama = document.registration.nama.value
    var email = document.registration.email.value
    var nomor = document.registration.nomor.value
    var kelas = document.registration.kelas.value
    var gender = document.querySelector('input[name="gender"]:checked'); // Check for selected gender

    var namaErr = emailErr = nomorErr = kelasErr = genderErr = true;

    // NAMA
    if(nama == "") {
        printError("namaErr", "Masukkan nama Anda")
        var elem = document.getElementById("nama")
            elem.classList.add("input-2")
            elem.classList.remove("input-1")
    } else {
        var regex = /^[a-zA-Z\s]+$/
        if(regex.test(nama) === false) {
            printError("namaErr", "Masukkan nama Anda dengan benar")
            var elem = document.getElementById("nama")
                elem.classList.add("input-2")
                elem.classList.remove("input-1")
        } else {
            printError("namaErr", "")
            namaErr = false
            var elem = document.getElementById("nama")
                elem.classList.add("input-1")
                elem.classList.remove("input-2")
        }
    }

    // EMAIL
    if(email == "") {
        printError("emailErr", "Masukkan email Anda")
        var elem = document.getElementById("email")
            elem.classList.add("input-2")
            elem.classList.remove("input-1")
    } else {
        var regex = /^\S+@\S+\.\S+$/
        if(regex.test(email) === false) {
            printError("emailErr", "Masukkan email Anda dengan benar")
            var elem = document.getElementById("email")
                elem.classList.add("input-2")
                elem.classList.remove("input-1")
        } else {
            printError("emailErr", "")
            emailErr = false
            var elem = document.getElementById("email")
                elem.classList.add("input-1")
                elem.classList.remove("input-2")
        }
    }

    // NOMOR
    if(nomor == "") {
        printError("nomorErr", "Masukkan nomor Anda")
        var elem = document.getElementById("nomor")
            elem.classList.add("input-2")
            elem.classList.remove("input-1")
    } else {
        var regex = /^[0-9]+$/
        if(regex.test(nomor) === false) {
            printError("nomorErr", "Masukkan nomor Anda dengan benar")
            var elem = document.getElementById("nomor")
                elem.classList.add("input-2")
                elem.classList.remove("input-1")
        } else {
            printError("nomorErr", "")
            nomorErr = false
            var elem = document.getElementById("nomor")
                elem.classList.add("input-1")
                elem.classList.remove("input-2")
        }
    }

    // KELAS
    if(kelas == "") {
        printError("kelasErr", "Masukkan kelas Anda")
        var elem = document.getElementById("kelas")
            elem.classList.add("input-2")
            elem.classList.remove("input-1")
    } else {
        printError("kelasErr", "")
        kelasErr = false
        var elem = document.getElementById("kelas")
            elem.classList.add("input-1")
            elem.classList.remove("input-2")
    }

    // GENDER
    if (gender == null) {
        printError("genderErr", "Pilih jenis klamin Anda");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    if (namaErr || emailErr || nomorErr || kelasErr || genderErr) {
        return false;
    } else {
        alert(`Hai, ${nama}! Terimakasih sudah join English Club ^___^. Kami akan menghubungi Anda melalui email ${email} atau ${nomor}, mohon ditunggu ya chat atau emailnya!`);

        // Reset the form after successful validation
        document.registration.reset();

        // Clear all error messages after reset
        printError("namaErr", "");
        printError("emailErr", "");
        printError("nomorErr", "");
        printError("kelasErr", "");
        printError("genderErr", "");
        
        return true;
    }
}