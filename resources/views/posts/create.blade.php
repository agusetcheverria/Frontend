@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Crear Nuevo Post</h1>

    <form action="{{ route('posts.store') }}" method="POST">
        @csrf
        <div class="form-group">
            <label for="title">Título</label>
            <input type="text" class="form-control" id="title" name="title" required>
        </div>
        
        <div class="form-group">
            <label for="content">Contenido</label>
            <textarea class="form-control" id="content" name="content" rows="5" required></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary">Guardar Post</button>
    </form>
</div>
@endsection
